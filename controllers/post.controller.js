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
