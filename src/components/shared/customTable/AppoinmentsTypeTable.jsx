/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
    Box,
    Zoom,
    Stack,
    Button,
    styled,
    Tooltip,
    Typography,
    tooltipClasses,
} from '@mui/material';

import Iconify from 'src/components/iconify';

import { editDeletPermissions } from './utils';
// import Label from 'src/components/label/label';

// ----------------------------------------------------------------------

function isVideoUrl(url) {
    // Define an array of video file extensions
    const videoExtensions = ['.mp4', '.webm', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.mpeg'];

    // Extract the file extension from the URL
    const fileExtension = url?.split('.')?.pop()?.toLowerCase();

    // Check if the file extension is in the list of video extensions
    return videoExtensions?.includes(`.${fileExtension}`);
}

const icons = {
    scheduleInfo: () => <AccessTimeIcon fontSize="12px" />,
    consultationType: () => <FiberManualRecordIcon fontSize="12px" />,
    status: {
        paid: () => <CheckCircleIcon fontSize="12px" />,
        unpaid: () => <CancelIcon fontSize="12px" />,
    },
    prescription: {
        created: () => <CheckCircleIcon fontSize="12px" />,
        "not created": () => <CancelIcon fontSize="12px" />,
    },
};

const iconToDisplay = (mainKey, subKey) => {
    const getIcon = (key, obj) => {
        if (!obj || typeof obj !== 'object') {
            // Base case: return null if obj is not an object
            return null;
        }

        const iconFunction = obj[key];
        if (typeof iconFunction === 'function') {
            // If the key points to a function, return the result of the function
            return iconFunction();
        }
        if (subKey) {
            // If there is a subKey, recursively call getIcon with the subKey
            return getIcon(subKey, iconFunction);
        }
        // If the key points to an object, recursively call getIcon
        return getIcon(key, iconFunction);
    };

    return getIcon(mainKey, icons) || null;
};

const variantStyle = {
    scheduleInfo: {
        width: 'max-content',
        backgroundColor: '#DCE3F3',
        color: '#286EFA',
        padding: '4px',
        borderRadius: '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
    },
    prescription: {
        created: {
            width: 'max-content',
            backgroundColor: '#FFF3CD',
            color: '#856404',
            padding: '4px 6px',
            borderRadius: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
        },
        "not created": {
            width: 'max-content',
            backgroundColor: '#DC3545',
            color: '#EEDDE0',
            padding: '4px 6px',
            borderRadius: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
        },
    },
    status: {
        paid: {
            width: 'max-content',
            backgroundColor: '#DCE9E0',
            color: '#28A745',
            padding: '4px 6px',
            borderRadius: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
        },
        unpaid: {
            width: 'max-content',
            backgroundColor: '#DC3545',
            color: '#EEDDE0',
            padding: '4px 6px',
            borderRadius: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
        },
    },
    consultationType: {
        offline: {
            backgroundColor: '#E3E4E6',
            color: '#000',
            padding: '4px',
            borderRadius: '20px',
            fontSize: '12px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
        },
        online: {
            backgroundColor: '#EEDDE0',
            color: '#DC3545',
            padding: '4px',
            borderRadius: '20px',
            fontSize: '12px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            gap: '2px',
        },
    },

};



const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        maxWidth: 200,
        textAlign: 'center'
    },
}));

export default function AppointmentsTableRow({
    data,
    handleClick,
    isStart,
    isCreate,
    onCreate,
    isNotification,
    onNotification,
    onDelete,
    onEdit,
    onView,
    isEdit = true,
    isDelete = true,
    isView,
    isTime,
    isRecordPayment,
    cretaed,
    onPayment,
    onStart,
    consultation
}) {
    // eslint-disable-next-line no-unused-vars
    const userData = useSelector((s) => s.user?.data);
    // const [open, setOpen] = useState(null);

    return (
        <TableRow hover tabIndex={-1} key={data.id}>
            {Object?.entries(data)?.map(([key, value]) => {
                const displayContent = () => {
                    if (value === undefined) return null;
                    const valueString = value?.toString();
                    if (valueString?.startsWith('http')) {
                        return isVideoUrl(valueString) ? (
                            <video width="150px" height="150px" controls src={value} />
                        ) : (
                            <img
                                width="150px"
                                height="150px"
                                style={{ borderRadius: '100%' }}
                                src={value}
                                alt=""
                            />
                        );
                    }
                    if (typeof value === 'object' && isTime && key === 'dateTime') {
                        return (
                            <Stack spacing={0.5}>
                                <Box sx={variantStyle.scheduleInfo}>
                                    <CalendarMonthIcon fontSize="14px" />
                                    <Typography fontSize="13px" fontWeight={500}>
                                        {value.date}
                                    </Typography>
                                </Box>
                                <Box sx={variantStyle.scheduleInfo}>
                                    <AccessTimeIcon fontSize="14px" />
                                    <Typography fontSize="13px" fontWeight={500}>
                                        {value.start_time} -
                                    </Typography>
                                    <Typography fontSize="13px" fontWeight={500}>
                                        {value.end_time}
                                    </Typography>
                                </Box>
                            </Stack>
                        );
                    }
                    if (typeof value === 'object') {
                        return (
                            <Stack>
                                {Object?.values(value)?.map((nestValue) => (
                                    <Typography fontSize="13px" fontWeight={500}>
                                        {nestValue}
                                    </Typography>
                                ))}
                            </Stack>
                        );
                    }
                    return value;
                };
                const modifiedIconToDisplay = iconToDisplay(key, value);
                return (
                    <TableCell key={key} component="th" scope="row">
                        <Typography
                            sx={
                                variantStyle[key] && variantStyle[key][value]
                                    ? { ...variantStyle[key], ...variantStyle[key][value] }
                                    : variantStyle[key] || {}
                            }
                            variant="subtitle2"
                            noWrap
                        >
                            {modifiedIconToDisplay}
                            {displayContent()}
                        </Typography>
                    </TableCell>
                );
            })}

            <TableCell component="th">
                {isStart && (

                    <Button
                        onClick={onStart}
                        variant={consultation === "Start" ? "tertiary" : "danger"}
                        startIcon={<Iconify icon="iconamoon:player-play-fill" />}
                    >
                        {consultation}
                    </Button>
                )}
                {isView && (
                    <IconButton
                        size="small"
                        onClick={onView}
                        sx={{
                            bgcolor: '#DCE9E0',
                            color: '#000',
                            margin: '0px 5px',
                            borderRadius: '6px',
                            ':hover': { bgcolor: '#28A745', color: '#fff' },
                        }}
                    >
                        <Iconify icon="iconamoon:eye" />
                    </IconButton>
                )}
                {isCreate && cretaed?.prescription === "not created" && (
                    <BootstrapTooltip
                        placement="top"
                        TransitionComponent={Zoom}
                        title={<h1 style={{ fontSize: "12px" }}>Create Prescription For This Patient</h1>}
                    >
                        <IconButton
                            size="small"
                            onClick={onCreate}
                            sx={{
                                bgcolor: '#d6d8d9',
                                color: '#1b1e21',
                                borderRadius: '6px',
                                margin: '0px 5px',
                                ':hover': { bgcolor: '#6a747b', color: '#fff' },
                            }}
                        >
                            <Iconify icon="iconamoon:sign-plus-circle-thin" />
                        </IconButton>
                    </BootstrapTooltip>
                )}

                {isNotification && cretaed?.prescription === "not created" && (
                    <BootstrapTooltip
                        placement="top"
                        TransitionComponent={Zoom}
                        title={<h1 style={{ fontSize: "12px" }}>Send Notify Mail To User for joining meeting</h1>}
                    >
                        <IconButton
                            size="small"
                            onClick={onNotification}
                            sx={{
                                bgcolor: '#DCE9E0',
                                color: '#000',
                                margin: '0px 5px',
                                borderRadius: '6px',
                                ':hover': { bgcolor: '#28A745', color: '#fff' },
                            }}
                        >
                            <Iconify icon="iconamoon:send" />
                        </IconButton>
                    </BootstrapTooltip>

                )}


                {editDeletPermissions(userData?.user_type) && isEdit && (

                    <BootstrapTooltip
                        placement="top"
                        TransitionComponent={Zoom}
                        title={<h1 style={{ fontSize: "12px" }}>Edit</h1>}
                    >
                        <IconButton
                            size="small"
                            onClick={onEdit}
                            sx={{
                                bgcolor: '#d6d8d9',
                                color: '#1b1e21',
                                borderRadius: '6px',
                                margin: '0px 5px',
                                ':hover': { bgcolor: '#6a747b', color: '#fff' },
                            }}
                        >
                            <Iconify icon="mdi:pencil-outline" />
                        </IconButton>
                    </BootstrapTooltip>

                )}
                {editDeletPermissions(userData?.user_type) && isDelete && (
                    <BootstrapTooltip
                        TransitionComponent={Zoom}
                        title={<h1 style={{ fontSize: "12px" }}>Delete</h1>}
                    >
                        <IconButton
                            size="small"
                            onClick={onDelete}
                            sx={{
                                bgcolor: '#f8d7da',
                                color: '#721c24',
                                margin: '0px 5px',
                                borderRadius: '6px',
                                ':hover': { bgcolor: '#c82333', color: '#fff' },
                            }}
                        >
                            <Iconify icon="iconamoon:trash" />
                        </IconButton>
                    </BootstrapTooltip>

                )}
                {
                    isRecordPayment?.price === "unpaid" && (
                        <Button
                            variant="success"
                            onClick={onPayment}
                            startIcon={<MonetizationOnIcon />}
                        >
                            Record For Payment
                        </Button>
                    )
                }
            </TableCell>
        </TableRow>
    );
}

AppointmentsTableRow.propTypes = {
    data: PropTypes.object,
    handleClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    isEdit: PropTypes.bool,
    isDelete: PropTypes.bool,
    isView: PropTypes.bool,
    onView: PropTypes.func,
    isTime: PropTypes.bool,
    isNotification: PropTypes.bool,
    onNotification: PropTypes.func,
    isCreate: PropTypes.bool,
    onCreate: PropTypes.func,
    isStart: PropTypes.bool,
    cretaed: PropTypes.object,
    isRecordPayment: PropTypes.object,
    onPayment: PropTypes.func,
    onStart: PropTypes.func,
    consultation: PropTypes.string,
};
