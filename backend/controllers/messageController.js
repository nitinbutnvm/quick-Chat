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
    return res.json({ success:false, message:error.message });
  }
};
