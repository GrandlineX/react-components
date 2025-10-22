import React, { useCallback, useState, DragEvent } from 'react';
import { IOCloudUpload } from '@grandlinex/react-icons';
import { Grid } from '../Grid/Grid';
import { cnx, useUIContext } from '../../util';
import { FormFieldChange, InputOption } from '../form/FormTypes';

export type UploadProps<T> = {
  inp: InputOption<T>;
  form: any;
  updateForm: (...changes: FormFieldChange[]) => void;
};

export default function Upload<T>({ inp, form, updateForm }: UploadProps<T>) {
  const ui = useUIContext();
  const { key, accept, disabled, restriction } = inp;
  const [dragActive, setDragActive] = useState(false);

  // Drag and drop handlers
  const handleDrag = useCallback((e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLLabelElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        updateForm({
          key,
          value: e.dataTransfer.files,
        });
      }
    },
    [key, updateForm],
  );

  return (
    <div>
      <label
        htmlFor="file-upload"
        className={cnx('file-upload', [dragActive, 'file-upload--active'])}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <Grid flex flexR gap={8}>
          <IOCloudUpload />
          {dragActive
            ? ui.translation.get('glx.input.icon.drop')
            : ui.translation.get('glx.input.icon.file')}
        </Grid>
        {form[key]
          ? Array.from(form[key] as FileList).map((file) => (
              <>
                <hr />
                <Grid>
                  <div>Name: {file.name}</div>
                  <div>Type: {file.type}</div>
                  <div>
                    Size: {Math.round((file.size / 1024 / 1024) * 100) / 100} MB
                  </div>
                </Grid>
              </>
            ))
          : null}
        <input
          id="file-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={(event) => {
            updateForm({
              key,
              value: event.target.files || null,
            });
          }}
          accept={accept}
          disabled={disabled}
          multiple={restriction?.multiple}
        />
      </label>
    </div>
  );
}
