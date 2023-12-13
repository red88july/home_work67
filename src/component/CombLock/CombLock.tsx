import {useDispatch, useSelector} from 'react-redux';
import {inputNumber, deleteNumber, checkAccess, clearNumber} from '../../container/Numbers/numbersSlice';
import {AppDispatch, RootState} from '../../app/store';
import '../../style.css';

const CombLock = () => {
    const {value,
           accessGranted,
           accessDenied,
           clearInput} = useSelector((state: RootState) => state.number);
    const dispatch:AppDispatch = useDispatch();
    const masked = value.split('').map(() => ('*'));

    const handleClick = (buttonValue: string) => {
        if (buttonValue === '<') {
            dispatch(deleteNumber());
        } else if (buttonValue === 'x') {
            dispatch(clearNumber());
        } else if (buttonValue === 'E') {
            dispatch(checkAccess());
        } else {
            dispatch(inputNumber(buttonValue));
        }
    };

    return (
        <div className="p-2 border-dark-subtle border border-5 rounded-3">
            <div className="d-flex flex-column align-items-center">
                <h4>Combination Lock</h4>
                <div
                    className={`border border-3 border-dark-subtle input-display 
                    ${accessGranted ? 'access-granted' : ''}
                    ${accessDenied ? 'access-denied' : ''}
                    ${clearInput ? 'clear-input' : ''}`}>{masked}</div>
            </div>
            {accessGranted &&
                <p className="mt-1">Access Granted</p> ||
             accessDenied &&
                <p className="mt-1">Access Denied</p>}
            <div className="d-flex flex-column gap-1 mt-3">
                <div className="d-flex gap-1">
                    <button type="button" value="9" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('9')}>9</button>
                    <button type="button" value="8" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('8')}>8</button>
                    <button value="7" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('7')}>7</button>
                </div>
                <div className="d-flex gap-1">
                    <button value="6" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('6')}>6</button>
                    <button value="5" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('5')}>5</button>
                    <button value="4" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('4')}>4</button>
                </div>
                <div className="d-flex gap-1">
                    <button value="3" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('3')}>3</button>
                    <button value="2" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('2')}>2</button>
                    <button value="1" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('1')}>1</button>
                </div>
                <div className="d-flex gap-1">
                    <button value="<" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('<')}>&lt;</button>
                    <button value="0" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('0')}>0</button>
                    <button value="E" className="btn-combo-lock rounded-2"
                            onClick={() => handleClick('E')}>E</button>
                </div>
                <button value="x" className="btn-combo-clear rounded-2"
                        onClick={() => handleClick('x')}>&#10008;</button>
            </div>
        </div>
    );
};

export default CombLock;