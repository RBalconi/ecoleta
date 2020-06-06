import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

interface Props {
  onFielUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFielUploaded }) => {
  const [selectFileUrl, setSelectFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectFileUrl(fileUrl);
      onFielUploaded(file);
    },
    [onFielUploaded]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectFileUrl ? (
        <img src={selectFileUrl} alt="Imagem do ponto de coleta" />
      ) : isDragActive ? (
        <p>Solte a imagem aqui...</p>
      ) : (
        <p>
          <FiUpload />
          Arraste uma imagem aqui ou clique para seleciona-la
        </p>
      )}
    </div>
  );
};

export default Dropzone;
