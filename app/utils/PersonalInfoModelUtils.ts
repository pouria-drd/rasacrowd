import PersonalInfoModel from "@/models/PersonalInfo";

export async function createItem(data: { name: string; description: string }) {
    const newItem = new PersonalInfoModel(data);
    await newItem.save();
    return newItem;
}

export async function getItems() {
    try {
        return PersonalInfoModel.find({});
    } catch (error) {
        console.log(error)
    }
}

export async function getItemById(id: string) {
    return PersonalInfoModel.findById(id);
}

export async function updateItem(id: string, data: { name: string; description: string }) {
    return PersonalInfoModel.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteItem(id: string) {
    return PersonalInfoModel.findByIdAndDelete(id);
}