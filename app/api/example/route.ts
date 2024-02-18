import { connectDB } from '@/lib/db';
import { NextResponse } from 'next/server';

import {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem,
} from '../../../utils/testModelUtils';


export async function GET(request: Request) {
    try {
        // Establish MongoDB connection
        const db = await connectDB();

        // Your server logic goes here, and you can use the 'db' object for database operations
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    const data = await getItems();

    const response = NextResponse.json({
        data
    });

    return response;
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const newItem = await createItem(data);

        const response = NextResponse.json({
            data: newItem
        });

        return response;

    } catch (error) {
        const response = NextResponse.json({
            error
        });

        return response;
    }
}
