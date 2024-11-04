import { compare, genSalt, hash } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImage: {
        type: String, // a link from cloudinary,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,

    }
}, { timestamps: true });


UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await genSalt(10);
        this.password = await hash(this.password, salt);
        next();
    }
})

UserSchema.methods.checkPassword = async function (password: string): Promise<boolean> {
    return await compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function (): string {
    // generate an access token that is given to the user upon login
    // this access token is used to authenticate the user for subsequent requests
    // it contains the user's id, email, and username
    // it is signed with a secret key (ACCESS_JWT_SECRET) so that it can't be tampered with
    // and it expires after a certain amount of time (ACCESS_JWT_EXPIRY)
    return jsonwebtoken.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
        },
        process.env.ACCESS_JWT_SECRET as string,
        { expiresIn: process.env.ACCESS_JWT_EXPIRY }, //BUG: not get .env variables
    );
};

UserSchema.methods.generateRefreshToken = function (): string {
    // This function generates a refresh token that is given to the user
    // when they first log in.
    // The refresh token contains only the user's id, and is signed with a secret
    // key (REFRESH_JWT_SECRET) so that it can't be tampered with.
    // The refresh token expires after a certain amount of time (REFRESH_JWT_EXPIRY).
    // The purpose of the refresh token is to allow the user to obtain a new
    // access token when the old one expires.
    // The user can do this by sending the refresh token to the server.
    // The server will then verify the token, and if it's valid,
    // the server will give the user a new access token.
    // This is how the user can stay logged in even after the access token
    // has expired.
    return jsonwebtoken.sign(
        { _id: this._id },
        process.env.REFRESH_JWT_SECRET as string,
        { expiresIn: process.env.REFRESH_JWT_EXPIRY } //BUG: not get .env variables
    )
}

const UserModel = model('User', UserSchema);

export { UserModel };
