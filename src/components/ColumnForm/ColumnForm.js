import styles from './ColumnForm.module.scss';
import Button from './../Button/Button'
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
};

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div>
            <span><TextInput value={title} onChange={e => setTitle(e.target.value)} /></span>
            <span><TextInput value={icon} onChange={e => setIcon(e.target.value)} /></span>
            <Button>Add column</Button>
            </div>
        </form>
	);
};

export default ColumnForm;