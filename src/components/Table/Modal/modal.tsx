import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStores';
import { useNavigate } from 'react-router-dom';
import './modal.css'

export const Modal = observer(() => {
    const { modalStore, userStore } = useStores();
    const navigate = useNavigate();

    return (
        <div className={`modal-overlay ${modalStore.isActive}`}>
            <section className="modal">
                <section className='modal-data'>
                    <h2>Confirmar escolha</h2>
                    Nome: {userStore.userData?.name}
                    <br />
                    Idade: {userStore.userData?.age}
                    <br />
                    CPF: {userStore.userData?.cpf}
                    <br />
                    País escolhido: {modalStore.modalData?.name}
                    <br />
                    Data do voo: {userStore.userData?.flightDate}
                </section>
                <section className='modal-buttons'>
                    <button className='modal-button' onClick={() => navigate('/')} >CONFIRMAR</button>
                    <button className='modal-button' onClick={() => modalStore.setModalVisibility('')}>CANCELAR</button>
                </section>
            </section>
        </div>
    );
});