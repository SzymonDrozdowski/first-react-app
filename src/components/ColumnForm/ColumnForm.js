import styles from './ColumnForm.module.scss';
import Button from './../Button/Button'
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setIcon('');
};

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div>
                <span> Title:<TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
                <span> Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
                <Button>Add column</Button>
            </div>
        </form>
	);
};

export default ColumnForm;