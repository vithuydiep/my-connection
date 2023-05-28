import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterItem from '../../Components/FilterItem/FilterItem';
import Header from '../../Layout/Header/Header';
import { ROUTE_PATHS } from '../../Routings/constant';
import Oracle from '../../assets/images/oracle.png';
import S3 from '../../assets/images/s3.png';
import { BackIcon } from '../../assets/svgs';
import useCreateConnectionStyle from './CreateConnectionPageStyles';
import CreateConnection from '../../Components/CreationConnection/CreationConnection';

interface DataProps {
    id: number
    name: string
    image: string
    category: string
}

const initData: DataProps[] = [
    {
        id: 1,
        name: 'S3',
        image: S3,
        category: 'storage',
    },
    {
        id: 2,
        name: 'Oracle',
        image: Oracle,
        category: 'database',
    },
];

function ConnectionsPage() {
    const [data, setData] = useState<DataProps[]>(initData);
    const { wrapper, slash, title, content, contentWrapper, container, item, filterWrapper, groupButton } =
        useCreateConnectionStyle();
    const [type, setType] = useState({
        all: true,
        storage: false,
        database: false,
    });
    const navigate = useNavigate()
    const [step, setStep] = useState<'first' | 'second'>('first')
    const [chosenType, setChosenType] = useState<string>('')

    const handleChange = (e: any) => {
        const { ariaLabel, checked } = e.target;
        setType({
            all: false,
            storage: false,
            database: false,
            [ariaLabel]: checked,
        });

        const filterData = initData.filter((itor: DataProps) => itor.category === ariaLabel)
        if (filterData.length === 0) {
            setData(initData)
        } else {
            setData(filterData)
        }

    };

    const calculateLength = (key: string): number => {
        return initData.filter((item: DataProps) => item.category === key).length
    }

    return (
        <>
            <Header />
            <div className={wrapper}>
                <div className={slash}>
                    Connections / <b>Create Connection</b>
                </div>
                <div className={title}>Create Connection</div>

                {
                    step === 'first' ? (
                        <div className={content}>
                            <p>Select the type of source you want to connect</p>
                            <div className={contentWrapper}>
                                <div className={filterWrapper}>
                                    <FilterItem
                                        checked={type.all}
                                        handleChange={handleChange}
                                        label={`All (${initData.length})`}
                                        ariaLabel={'all'}
                                    />
                                    <FilterItem
                                        checked={type.database}
                                        handleChange={handleChange}
                                        label={`Database (${calculateLength('database')})`}
                                        ariaLabel='database'
                                    />
                                    <FilterItem
                                        checked={type.storage}
                                        handleChange={handleChange}
                                        label={`File Storage (${calculateLength('storage')})`}
                                        ariaLabel='storage'
                                    />
                                </div>
                                <div className={container}>
                                    {data.map((iter: DataProps) => (
                                        <button className={item} key={iter.id} onClick={() => {
                                            setStep('second')
                                            setChosenType(iter.name)
                                        }}>
                                            <img src={iter.image} alt='' />
                                            <p>{iter.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <CreateConnection type={chosenType} />
                    )
                }
                <div>
                    <button onClick={() => {
                        if (step === 'second') {
                            return setStep('first')
                        }
                        navigate(ROUTE_PATHS.connectionPage)
                    }}>
                        <BackIcon color='#405e82' />
                        <p>Back</p>
                    </button>
                    <div className={groupButton}>
                        <button>
                            Cancel
                        </button>
                        <button>
                            Create Connection
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ConnectionsPage;
