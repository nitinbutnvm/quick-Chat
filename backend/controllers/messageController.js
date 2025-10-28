import User from "../models/User.js";

// get all user except lgin user
export const getUsersForSidebar = async () => {
  try {
    const userId = requestAnimationFrame.user._id;
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );

    // count no of unseen message
    const unseenMessages = {};
    const promises = filteredUsers.map(async (user) => {
      const messages = await Message.find({
        senderId: user._id,
        receiverId: userId,
        seen: false,
      });
      if (messages.length > 0) {
        unseenMessages[user._id] = messages.length;
      }
    });
    await Promise.all(promises);
    return res.json({ success:true, users: filteredUsers, unseenMessages });
  } catch (error) {
    console.log(error.messages);
    res.json({ success:false, message:error.message });
  }
};

// get all message selected user

export const getMessages = async (req, res) => {
    try {
        const {id : selectedUserId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: selectedUserId },
                { senderId: selectedUserId, receiverId: myId }
            ]
        })
        await Message.updateMany(
            { senderId: selectedUserId, receiverId: myId}, {seen: false },
            
        );
        res.json({ success:true, messages });
    } catch (error) {
        console.log(error.messages);
    res.json({ success:false, message:error.message }); 
    }
}
// api to mark messages as seen
export const markMessagesAsSeen = async (req, res) => {
  try {
    const {id } = req.params;
    await Message.findByIdAndUpdate(id, { seen: true });
    res.json({ success:true})
  } catch (error) {
    console.log(error.messages);
    res.json({ success:false, message:error.message });
  }
}