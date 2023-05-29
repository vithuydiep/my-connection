import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';
import * as React from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import Oracle from '../../assets/images/oracle.png';
import S3 from '../../assets/images/s3.png';
import FormInput from '../FormInput/FormInput';
import useCreationConnectionStyle from './CreationConnectionStyles';
import FormSelect from '../FormSelect/FormSelect';

interface CreateConnectionProps {
    type: string;
}

interface FormValueProps {
    connectionType: string;
    name: string;
    description: string;
    host: string;
    port: number;
    serverName: string;
    username: string;
    password: string;
    sid: string;
    bucketName: string;
    prefix: string;
    fileFormat: string
}



function CreateConnection({ type }: CreateConnectionProps) {
    const { wrp, infoWrapper, typeChosenWrapper, serverInformationWrp, tooltip, connectByWrp } = useCreationConnectionStyle();
    const [connectBy, setConnectBy] = React.useState('serverName');
    const [formatFile, setFormatFile] = React.useState('excel')

    const handleConnectChange = (event: SelectChangeEvent) => {
        setConnectBy(event.target.value);
    };

    const handleFormatChange = (event: SelectChangeEvent) => {
        setFormatFile(event.target.value);
    };


    const formValue: FormValueProps = {
        connectionType: type,
        name: '',
        description: '',
        host: '',
        password: '',
        port: 1521,
        serverName: '',
        username: '',
        sid: '',
        bucketName: '',
        prefix: '""',
        fileFormat: ''
    };


    return (
        <Formik
            initialValues={formValue}
            enableReinitialize
            onSubmit={() => { }}
        >
            {(formik: FormikProps<FormValueProps>) => (
                <Form className={wrp}>
                    <div className={infoWrapper}>
                        <p>Connection Information</p>
                        <div className={typeChosenWrapper}>
                            <p>Connection Type</p>
                            <div>
                                <img src={type === 'S3' ? S3 : Oracle} alt='' />
                                <p>{type}</p>
                            </div>
                        </div>
                        <FormInput
                            name='name'
                            label='Name'
                            value={formik.values.name}
                            description='Must be unique. Use alphanumeric and +=,.@-_ character. Maximum 128 characters'
                        />
                        <FormInput
                            name='description'
                            label='Description'
                            value={formik.values.description}
                            description='Use alphanumeric and +=,.@-_ character. Maximum 128 characters'
                            isOptional
                        />
                    </div>
                    {
                        type === 'Oracle' ? (<div className={serverInformationWrp}>
                            <p>Server Information</p>
                            <FormInput
                                name='host'
                                label='Host'
                                value={formik.values.host}
                                toolTipString='Host to connect to the database'
                            />
                            <FormInput
                                name='port'
                                label='Port'
                                value={formik.values.port}
                                toolTipString='Port to connect to the database. Default to 1521'
                            />
                            <div className={connectByWrp}>
                                <label>Connect by <FontAwesomeIcon icon={faCircleInfo} data-tooltip-id="info" data-tooltip-content={'Connect by'} size='sm' /></label>
                                <Select
                                    value={connectBy}
                                    onChange={handleConnectChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                >
                                    <MenuItem value={'serverName'}>Service Name</MenuItem>
                                    <MenuItem value={'sid'}>System ID (SID)</MenuItem>
                                </Select>
                                <div>
                                    {
                                        connectBy === 'serverName' ? (
                                            <FormInput
                                                name='serverName'
                                                label='Server Name'
                                                value={formik.values.serverName}
                                                toolTipString='Server Name to connect to the database'
                                            />
                                        ) : (
                                            <FormInput
                                                name='sid'
                                                label='System ID (SID)'
                                                value={formik.values.sid}
                                                toolTipString='System ID to connect to the database'
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <FormInput
                                name='username'
                                label='Username'
                                value={formik.values.username}
                                toolTipString='Username to connect to the database'
                            />
                            <FormInput
                                name='password'
                                label='Password'
                                value={formik.values.password}
                                toolTipString='Password to connect to the database'
                                type='password'
                            />
                            <div>
                                <button disabled>
                                    Test Connection
                                </button>
                            </div>
                        </div>) : (
                            <div className={serverInformationWrp}>
                                <p>Server Information</p>
                                <FormInput
                                    name='bucketName'
                                    label='Bucket Name'
                                    value={formik.values.bucketName}
                                    toolTipString='Bucket name to connect to the database'
                                />
                                <FormInput
                                    name='prefix'
                                    label='Prefix'
                                    value={formik.values.prefix}
                                    toolTipString='Prefix of the objects to collect. Think of it as folder in file system. Default to "",mean everything in the bucket'
                                    isOptional
                                />
                                <div className={connectByWrp}>
                                    <label>File format <FontAwesomeIcon icon={faCircleInfo} data-tooltip-id="info" data-tooltip-content={'File format'} size='sm' /></label>
                                    <Select
                                        value={formatFile}
                                        onChange={handleFormatChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        size='small'
                                    >
                                        <MenuItem value={'excel'}>Excel</MenuItem>
                                        <MenuItem value={'csv'}>CSV</MenuItem>
                                    </Select>
                                    <FormSelect
                                        label={formatFile === 'excel' ? 'Excel Version' : 'CSV'}
                                        name='excelVersion'
                                        isOptional
                                        toolTipString='Excel version'
                                        options={[
                                            {
                                                key: 'xls',
                                                value: '.xls'
                                            },
                                            {
                                                key: 'xlsx',
                                                value: '.xlsx'
                                            }, {
                                                key: 'na',
                                                value: 'N/A'
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                        )

                    }
                    <ReactTooltip
                        id="info"
                        place="right"
                        className={tooltip}
                    />
                </Form>
            )}

        </Formik>
    );
}

export default CreateConnection;
