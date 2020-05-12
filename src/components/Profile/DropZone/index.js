/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import './dropzone.scss';

/**
 * @param  {Func} FileUploadFunc - Permet de changer le state avec les infos de la photo choisie
 * @param  {Func} editProfileAvatar - Permet de mettre à jour la photo de profil du user
 * @param  {String} fileUpload - Permet l'apprarition du nom de la photo et du boutton
 * @param  {String} preview - URL fictive rendu par le navigateur
 * @param  {Func} previewImage - Fonction qui ramène l'URL fictive dans le state
 */
const DropZone = ({
  FileUploadFunc, editProfileAvatar, fileUpload, preview, previewImage,
}) => {
  /**
   * @param  {Array} acceptedFiles
   */
  const onDrop = useCallback((acceptedFiles) => {
    FileUploadFunc(acceptedFiles[0]);

    acceptedFiles.forEach((preview) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result;
        previewImage(binaryStr);
      };
      reader.readAsDataURL(preview);
    });
  }, []);

  const {
    acceptedFiles, getRootProps, getInputProps, isDragActive,
  } = useDropzone({ onDrop });


  const fileName = acceptedFiles.map((file) => (
    <p className="dropzone-text--name" key={file.name}>
      {file.name}
    </p>
  ));

  return (
    <section>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive
            ? <p className="dropzone-text">Déposez les fichiers ici...</p>
            : <p className={preview ? 'dropzone-text--noPreview' : 'dropzone-text'}>Faites glisser/déposer votre fichier ici, ou cliquez pour sélectionner votre fichier</p>
        }
        {
          preview && (
            <div>
              <img src={preview} alt="" className="dropzone-image" />
            </div>
          )
        }
      </div>
      {
        fileUpload && (
          <div>
            {fileName}
            <button type="button" onClick={editProfileAvatar} className="dropzone-button">Modifier sa photo</button>
          </div>
        )
      }
    </section>
  );
};

DropZone.propTypes = {
  fileUpload: PropTypes.string.isRequired,
  FileUploadFunc: PropTypes.func.isRequired,
  editProfileAvatar: PropTypes.func.isRequired,
  preview: PropTypes.string.isRequired,
  previewImage: PropTypes.func.isRequired,
};

export default DropZone;
