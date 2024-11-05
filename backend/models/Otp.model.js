import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";
import mailTemplateCode from "../utils/mailTemplate.js";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 10*60*1000,
    }
});


async function sendVerificationEmail(email, otp) {
    try {
        await mailSender(email, "Verification Email From CodeSphere", mailTemplateCode(otp, email));
    } catch (error) {
        console.log("Error while sending email: ", error);
        throw error;
    }
}

otpSchema.pre('save', async function() {
    await sendVerificationEmail(this.email, this.otp);
    next();
});

export const Otp = mongoose.model('Otp', otpSchema);