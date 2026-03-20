const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const getCookieOptions = () => ({
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 3 * 24 * 60 * 60 * 1000,
});

const buildProfilePayload = (user) => ({
    _id: user._id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
});

module.exports.Signup = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const user = await User.create({
            email,
            password,
            username,
            createdAt,
        });

        const token = createSecretToken(user._id);

        res.cookie("token", token, getCookieOptions());

        res.status(201).json({
            message: "User signed up successfully",
            success: true,
            user: buildProfilePayload(user),
            token,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, getCookieOptions());
        res.status(201).json({
            message: "User logged in successfully",
            success: true,
            token,
            user: buildProfilePayload(user),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports.Profile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("_id username email createdAt");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user: buildProfilePayload(user),
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Unable to fetch profile",
        });
    }
};
