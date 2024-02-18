import TestModel from '../models/test';

export async function createItem(data: { name: string; description: string }) {
    const newItem = new TestModel(data);
    await newItem.save();
    return newItem;
}

export async function getItems() {
    try {
        return TestModel.find({});
    } catch (error) {
        console.log(error)
    }
}

export async function getItemById(id: string) {
    return TestModel.findById(id);
}

export async function updateItem(id: string, data: { name: string; description: string }) {
    return TestModel.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteItem(id: string) {
    return TestModel.findByIdAndDelete(id);
}