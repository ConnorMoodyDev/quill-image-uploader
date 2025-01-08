import Quill from "quill";


const InlineBlot = Quill.import("blots/block/embed");
const LoadingImage = class extends InlineBlot {
    static allowDelete = false;
    static create(src) {
        const node = super.create(src);
        if (src === true) return node;
        const image = document.createElement("img");
        image.setAttribute("src", src);
        node.appendChild(image);
        node.setAttribute("contenteditable", false);
        image.setAttribute("contenteditable", false);
        return node;
    }

    deleteAt(index, length) {
        if (LoadingImage.allowDelete) {
            this.cache = {};
            return super.deleteAt(index, length);
        }

        return false;
    }

    static value(domNode) {
        const { src, custom } = domNode.dataset;
        return { src, custom };
    }

    insertAt(index, value) {
        // Prevent creating a new span when backspace is pressed at the end of the blot
        const blotLength = this.length();
        if (index >= blotLength) {
            return; // Ignore the insert if at or beyond the blot's length
        }

        super.insertAt(index, value);
    }

    length() {
        return 1;
    }
};
LoadingImage.blotName = "imageBlot";
LoadingImage.className = "image-uploading";
LoadingImage.tagName = "span";
Quill.register({ "formats/imageBlot": LoadingImage });


export default LoadingImage;
