/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Grid, Stack, Button, Typography, IconButton } from '@mui/material';

import { client } from 'src/theme/palette';
import { getErrorMessage } from 'src/utils';
import patientIntakeFormServices from 'src/redux/api/patientIntakeFormServices';

const AdvancedFileInput = ({ labTests, setOpenFile, id, setLoadings, setRefetch, refetch }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);


    const handleFileChange = (labTestId, event) => {
        const newFile = event.target.files[0];

        setSelectedFiles((prevFiles) => [
            ...prevFiles,
            { lab_test_id: labTestId, files: [newFile] },
        ]);
    };

    const handleRemoveFile = (labTestId, fileIndex) => {
        setSelectedFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles[fileIndex].files = [];
            return updatedFiles.filter((fileObj) => fileObj.files.length > 0);
        });
    };

    const isImage = (file) => file.type.startsWith('image/');
    const handleSubmit = async () => {
        console.log('Selected Files:', selectedFiles);
        setOpenFile(false)
        setLoadings(true)
        await patientIntakeFormServices.patientUploadFiles({ lab_tests: selectedFiles, medical_record_id: id }).then(() => {
            Swal.fire({
                title: "Success",
                text: "Successfully uploaded files",
                icon: "success",
            })
            setRefetch(!refetch)
            setLoadings(false)

            setSelectedFiles([])
        }).catch((error) => {
            Swal.fire({
                title: "Error uploading",
                text: getErrorMessage(error),
                icon: "error",
            })
            setLoadings(false)

        })
    };

    return (
        <Stack width="100%">
            {labTests?.map((labTest, labTestIndex) => (
                <div key={labTest.id}>
                    <Typography p={2} variant="h6" style={{ margin: '16px 0' }}>
                        Test Name:  {labTest.name}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <input
                            type="file"
                            id={`file-input-${labTest.id}`}
                            style={{ display: 'none' }}
                            onChange={(event) => handleFileChange(labTest.id, event)}
                        />
                        <label htmlFor={`file-input-${labTest.id}`}>
                            <Button
                                variant="contained"
                                component="span"
                                startIcon={<CloudUploadIcon />}
                                style={{ marginBottom: 16 }}
                            >
                                Upload File
                            </Button>
                        </label>
                    </div>
                    <Grid spacing={2} container>
                        {selectedFiles.map((fileObj, fileIndex) =>
                            fileObj.lab_test_id === labTest.id ? (
                                <Grid position="relative" display="flex" justifyContent="center" alignItems="center" item xs={4}>
                                    {fileObj.files.map((file, innerFileIndex) => (
                                        <div style={{ width: "80%" }} key={`${labTest.id}-${fileIndex}-${innerFileIndex}`}>
                                            {isImage(file) ? (
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    style={{ maxWidth: '100%', width: "100%", maxHeight: '200px' }}
                                                />
                                            ) : (
                                                <Typography
                                                    color={client.primary}
                                                    variant="body1"
                                                    style={{ marginRight: 8 }}
                                                >
                                                    {file.name}
                                                </Typography>
                                            )}
                                            <IconButton
                                                sx={{
                                                    position: 'absolute',
                                                    right: 0,
                                                    top: 0,
                                                }}
                                                variant="danger"
                                                size="small"
                                                onClick={() => handleRemoveFile(labTest.id, fileIndex)}
                                                aria-label="Remove File"
                                            >
                                                <CancelIcon />
                                            </IconButton>
                                        </div>
                                    ))}
                                </Grid>
                            ) : null
                        )}

                    </Grid>
                </div>
            ))}
            <Box display="flex" justifyContent="center">
                <Box py={3} width="max-content">
                    <Button variant="tertiary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
};

export default AdvancedFileInput;
