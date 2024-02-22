import mongoose, { Document, Schema } from 'mongoose';

interface PersonalInfoInterface extends Document {
    AgentFullName: string;
    AgentPhoneNumber: string;
    AgentAgeRange: string;
    AgentDegree: string;
    Email: string;
    IdeaTitle: string;
    IdeaDescription: string;
    ProductPhase: string;
    MarketPoints: string;
    MarketTarget: string;
    MarketRivals: string;
    DoneInvest: string;
    RequestedInvest: string;
    // CaptchaId: string;
    // CaptchaCode: string;
}

const PersonalInfoSchema = new Schema<PersonalInfoInterface>({
    AgentFullName: { type: String, required: true },
    AgentPhoneNumber: { type: String, required: true },
    AgentAgeRange: { type: String, required: true },
    AgentDegree: { type: String, required: true },
    Email: { type: String, required: false },
    IdeaTitle: { type: String, required: true },
    IdeaDescription: { type: String, required: true },
    ProductPhase: { type: String, required: true },
    MarketPoints: { type: String, required: true },
    MarketTarget: { type: String, required: true },
    MarketRivals: { type: String, required: true },
    DoneInvest: { type: String, required: true },
    RequestedInvest: { type: String, required: true },
    // CaptchaId: { type: String, required: true },
    // CaptchaCode: { type: String, required: true },
});

const PersonalInfoModel = mongoose.models.TestModel || mongoose.model<PersonalInfoInterface>('PersonalInfoModel', PersonalInfoSchema);

export default PersonalInfoModel;
