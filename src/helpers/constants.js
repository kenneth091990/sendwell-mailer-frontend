
export const SESSION_TOKEN = "stk";

export const validateEmail = (email) => {
    console.log("Dumaan ka ba dito");
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

export const verifySession = (token) => {
    try {
        let data = jwtDecode(token)
        return data;
    } catch (error) { return null; }
}


export const getUploadLink = (fileURL, altImage) => {
    if (!fileURL) return `https://placehold.co/90x90?text=${encodeURI(altImage ?? "File Link")}`;

    return `${import.meta.env.VITE_SERVER_URI}${fileURL ?? ""}`;
}


export function capitalizeWordsWithSpace(str) {
    // Split the string by spaces
    const words = str.split(' ');

    // Capitalize the first letter of each word and join them back with spaces
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return capitalizedWords;
}


export const parseDateToInput = (originalDateTime) => {
    const dateObject = new Date(originalDateTime);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with '0' if needed.
    const day = String(dateObject.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

export async function convertURLImageToDataURI(imageUrl) {
    return new Promise(async (ok, notOk) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const reader = new FileReader();

            reader.onloadend = function () {
                const base64data = reader.result;
                // document.getElementById('output').textContent = base64data;
                ok(base64data);
            };

            reader.readAsDataURL(blob);
        } catch (error) {
            notOk(error.toString());
        }
    })
}


export const elegantFormat = (str) => {
    if (!str) return "";
    // Split the str by underscores
    const words = str.split('_');

    // Capitalize the first letter of each word and join them back with spaces
    const readableWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return readableWords;
}