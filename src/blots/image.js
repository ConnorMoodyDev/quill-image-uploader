import Quill from "quill";


const ImageBlot = Quill.import("formats/image");

export default class CustomImage extends ImageBlot {
    static blotName = "custom-image";
    static uploadId = -1;

    static create(value) {
        let node = super.create(value);

        node.setAttribute("src", value.src);

        if (value.uploadId !== null) {
            node.setAttribute("upload-id", value.uploadId);
        }

        return node;
    }

    static value(node) {
        return {
            src: node.getAttribute("src"),
            uploadId: node.getAttribute("upload-id"),
        };
    }
}

Quill.register(CustomImage);
