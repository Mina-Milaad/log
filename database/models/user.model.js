import bycrpt from 'bcrypt';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: {
        type: String,
        enum: ["admin", "user", "agent"],
        default: 'user'
    },
    logoutAt: Date,
}, { timestamps: true, versionKey: false })


schema.pre('save', function () {
    this.password = bcrybt.hashSync(this.password, 8)
})

schema.pre('findOneAndUpdate', function () {
    if (this._update.password) this._update.password = bcrybt.hashSync(this._update.password, 8)
})

export const User = mongoose.model('User', schema);