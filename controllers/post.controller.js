const Post = require("../models/post.model");
const {
    createSuccessResponse,
    errorResponse,
    serverErrorResponse,
} = require("../utils/api.response");

exports.createPost = async (req, res) => {
    try {
        const userId = req.user._id; 
        const { title, description, fileUrl } = req.body;

        const post = new Post({
            userId,
            title,
            description,
            fileUrl,
        });

        await post.save();

        return createSuccessResponse("Post created successfully", {}, res);
    } catch (ex) {
        return serverErrorResponse(ex, res);
    }
};
exports.updatePost = async (req, res) =>{
    try {
        
        const { postId } = req.params;
        const { title, description, fileUrl } = req.body;
        const existingPost = await Post.findById(postId);

        if (!existingPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (existingPost.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Permission denied. You are not the creator of this post." });
        }
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          { title, description, fileUrl },
          { new: true }
        );
    
        if (!updatedPost) {
          return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(updatedPost);
    }catch (ex) {
        return serverErrorResponse(ex, res);
    }
}
