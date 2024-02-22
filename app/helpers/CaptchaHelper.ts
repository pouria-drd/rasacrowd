export const generateRandomCode = (): string => {
    let code = Math.floor(Math.random() * 1000);

    while (code < 100 || code > 999) {
        console.log("loop")
        code = Math.floor(Math.random() * 1000);
    }

    return code.toString();
}

export const generateImage = async (code: string) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) return;

    // Drawing a simple rectangle on the canvas
    context.fillStyle = '#3498db'; // Blue color
    context.fillRect(10, 10, 100, 50); // Rectangle dimensions

    // Drawing text on the canvas
    context.fillStyle = '#ffffff'; // White color
    context.font = '20px Arial';

    context.fillText(code, 20, 40);


    // Convert canvas to Base64
    const base64Image = canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');

    return base64Image
}
