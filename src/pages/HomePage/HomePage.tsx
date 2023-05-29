import { Pagination } from '@mui/material';
import { orderBy } from 'lodash';
import { useState } from 'react';
import { Sidebar } from '../../Components';
import Footer from '../../Components/Footer/Footer';
import HeaderItem from '../../Components/HeaderItem/HeaderItem';
import Header from '../../Layout/Header/Header';
import { AccordianIcon } from '../../assets/svgs';
import useHomePageStyle from './HomePageStyles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../Routings/constant';




interface DataConnectionProps {
  id: number;
  connectionName: string;
  connectionType: string;
  status: string;
  createdBy: string;
  creationTime: string;
  lastUpdate: string;
}

const initData: DataConnectionProps[] = [
  {
    id: 1,
    connectionName: ' W4',
    connectionType: 'Oracle',
    status: 'Succeeded',
    createdBy: 'vi.tran',
    creationTime: '2/5/2022-10:00 am',
    lastUpdate: '2/5/2022-10:00 am',
  },
  {
    id: 2,
    connectionName: 'T24',
    connectionType: 'Oracle',
    status: 'Failed',
    createdBy: 'vi.tran',
    creationTime: '2/5/2022-10:00 am',
    lastUpdate: '2/5/2022-10:00 am',
  },
  {
    id: 3,
    connectionName: 'T24',
    connectionType: 'Oracle',
    status: 'N/A',
    createdBy: 'vi.tran',
    creationTime: '2/5/2022-10:00 am',
    lastUpdate: '2/5/2022-10:00 am',
  },
];

function HomePage() {
  const navigate = useNavigate()
  const [data, setData] = useState<DataConnectionProps[]>(initData);
  const [sorting, setSorting] = useState({
    connectionName: false,
    connectionType: false,
    status: false,
    createdBy: false,
    creationTime: false,
    lastUpdate: false,
  });

  const {
    wrapper,
    content,
    title,
    groupWrapper,
    disableBtn,
    contentWrapper,
    table,
    wrapTable,
    pagination,
  } = useHomePageStyle();

  const onCheckClass = (value: string): string => {
    switch (value) {
      case 'Succeeded':
        return 'success';
      case 'Failed':
        return 'fail';
      default:
        return '';
    }
  };

  const onHandleSorting = (name: string, value: boolean): void => {
    setSorting({
      ...sorting,
      [name]: value,
    });
    const newData = orderBy(data, [name], [value ? 'desc' : 'asc'])
    setData(newData)
  };


  return (
    <>
      <Header customize />
      <div className={wrapper}>
        <Sidebar />
        <div className={content}>
          <div className={title}>Connections</div>
          <div className={groupWrapper}>
            <p>Connections</p>
            <div>
              <button className={disableBtn}>
                Actions
                <AccordianIcon />
              </button>
              <button onClick={()=> {
                navigate(ROUTE_PATHS.createConnectionPage)
              }}>Create Connection</button>
            </div>
          </div>
          <div className={contentWrapper}>
            <div className={wrapTable}>
              <table className={table}>
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <HeaderItem
                        name='Connection Name'
                        sorting={sorting.connectionName}
                        onHandleSorting={onHandleSorting}
                        objectKey='connectionName'
                      />
                    </th>
                    <th>
                      <HeaderItem
                        name='Connection Type'
                        sorting={sorting.connectionType}
                        onHandleSorting={onHandleSorting}
                        objectKey='connectionType'
                      />
                    </th>
                    <th>
                      <HeaderItem
                        name='Status'
                        sorting={sorting.status}
                        onHandleSorting={onHandleSorting}
                        objectKey='status'
                      />
                    </th>
                    <th>
                      <HeaderItem
                        name='Created By'
                        sorting={sorting.createdBy}
                        onHandleSorting={onHandleSorting}
                        objectKey='createdBy'
                      />
                    </th>
                    <th>
                      <HeaderItem
                        name='Creation Time'
                        sorting={sorting.creationTime}
                        onHandleSorting={onHandleSorting}
                        objectKey='creationTime'
                      />
                    </th>
                    <th>
                      <HeaderItem
                        name='Last Updated'
                        sorting={sorting.lastUpdate}
                        onHandleSorting={onHandleSorting}
                        objectKey='lastUpdate'
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type='radio' name='check' />
                      </td>
                      <td className='textPrimary'>{item.connectionName}</td>
                      <td>{item.connectionType}</td>
                      <td className={onCheckClass(item.status)}>
                        {item.status}
                      </td>
                      <td>{item.createdBy}</td>
                      <td>{item.creationTime}</td>
                      <td>{item.lastUpdate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination
            count={10}
            variant='outlined'
            shape='rounded'
            className={pagination}
            color='primary'
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
