import { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { ImagePickerPreview, ImagePreview } from "./styles";

const ImagePicker = ({
  currentImage,
  previewText,
  onImageSelect,
}: ImagePickerProps) => {
  const [openFileSelector, { filesContent }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: false,
    limitFilesConfig: { max: 1 },
  });

  useEffect(() => {
    if (filesContent[0]) {
      onImageSelect(filesContent[0].content);
    }
  }, [filesContent]);

  return (
    <div onClick={() => openFileSelector()}>
      {(!filesContent || (!filesContent.length && !currentImage)) && (
        <ImagePickerPreview>{previewText || null}</ImagePickerPreview>
      )}
      {(!!currentImage || (!!filesContent && !!filesContent.length)) && (
        <ImagePreview
          src={filesContent[0] ? filesContent[0].content : currentImage}
        />
      )}
    </div>
  );
};

export default ImagePicker;
