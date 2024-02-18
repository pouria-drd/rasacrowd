import mongoose, { Document, Schema } from 'mongoose';

interface TestInterface extends Document {
    // Define your schema fields here
    name: string;
    description: string;
}

const TestSchema = new Schema<TestInterface>({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const TestModel = mongoose.models.TestModel || mongoose.model<TestInterface>('TestModel', TestSchema);

export default TestModel;
