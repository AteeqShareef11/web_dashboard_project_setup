/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Zoom,
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
  payment: {
    unpaid: {
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
    paid: {
      backgroundColor: '#286EFA',
      color: '#fff',
      padding: '4px',
      borderRadius: '20px',
      fontSize: '12px',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      gap: '2px',
    }
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

export default function UserTableRow({
  data,
  handleClick,
  onDelete,
  onEdit,
  onView,
  isEdit = true,
  isDelete = true,
  isView,
  isTime,
  isPayment,
  isDisCharge,
  onDischarge,
  onPayment,
  isChange,
  onChange,
  isAdd,
  addTitle,
  onAdd,
  changeTitle,
  isUpload,
  uploadTitle,
  onUpload,
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

          return value;
        };
        const iconToDisplay = icons[key] ? icons[key]() : null;
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
              {iconToDisplay}
              {displayContent()}
            </Typography>
          </TableCell>
        );
      })}

      <TableCell component="th">


        {isAdd && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Add {addTitle}</h1>}
          >
            <IconButton
              onClick={onAdd}
              sx={{
                bgcolor: '#d6d8d9',
                color: '#1b1e21',
                borderRadius: '6px',
                margin: '0px 5px',
                ':hover': { bgcolor: '#6a747b', color: '#fff' },
              }}
            >
              <Iconify icon="typcn:plus" />
            </IconButton>
          </BootstrapTooltip>
        )}
        {isUpload && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Upload {uploadTitle}</h1>}
          >
            <IconButton
              onClick={onUpload}
              sx={{
                bgcolor: '#d6d8d9',
                color: '#1b1e21',
                borderRadius: '6px',
                margin: '0px 5px',
                ':hover': { bgcolor: '#6a747b', color: '#fff' },
              }}
            >
              <Iconify icon="typcn:upload" />
            </IconButton>
          </BootstrapTooltip>
        )}

        {isChange && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Change {changeTitle}</h1>}
          >
            <IconButton
              onClick={onChange}
              sx={{
                bgcolor: '#d6d8d9',
                color: '#1b1e21',
                borderRadius: '6px',
                margin: '0px 5px',
                ':hover': { bgcolor: '#6a747b', color: '#fff' },
              }}
            >
              <ChangeCircleIcon style={{ fontSize: "18px" }} />
            </IconButton>
          </BootstrapTooltip>
        )}

        {isDisCharge && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Discharge</h1>}
          >
            <IconButton
              onClick={onDischarge}
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
        {isPayment && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Update Payemt</h1>}
          >
            <IconButton
              onClick={onPayment}
              sx={{
                bgcolor: '#DCE9E0',
                color: '#000',
                borderRadius: '6px',
                ':hover': { bgcolor: '#28A745', color: '#fff' },
              }}
            >
              <MonetizationOnIcon fontSize='small' />
            </IconButton>
          </BootstrapTooltip>
        )}
        {isView && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>View</h1>}
          >
            <IconButton
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
          </BootstrapTooltip>
        )}
        {editDeletPermissions(userData?.user_type) && isEdit && (
          <BootstrapTooltip
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Edit</h1>}
          >
            <IconButton
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
            placement="top"
            TransitionComponent={Zoom}
            title={<h1 style={{ fontSize: '12px' }}>Delete</h1>}
          >
            <IconButton
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
      </TableCell>
    </TableRow>
  );
}

UserTableRow.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  isEdit: PropTypes.bool,
  isDelete: PropTypes.bool,
  isView: PropTypes.bool,
  onView: PropTypes.func,
  isTime: PropTypes.bool,
  isPayment: PropTypes.bool,
  onPayment: PropTypes.func,
  isDisCharge: PropTypes.bool,
  onDischarge: PropTypes.func,
  isChange: PropTypes.bool,
  onChange: PropTypes.func,
  isAdd: PropTypes.bool,
  addTitle: PropTypes.string,
  onAdd: PropTypes.func,
  changeTitle: PropTypes.string,
  isUpload: PropTypes.bool,
  uploadTitle: PropTypes.string,
  onUpload: PropTypes.func,
};
