import React, {Suspense, lazy} from "react";
import {createRoot} from "react-dom/client"
import ModalLoading from "./modalLoading";

export function openModal(){
    const Modal = lazy(()=> import('./modalSetting'));//separa el codigo de Modal del bundle principal
    const modalDiv = document.createElement("div");
    modalDiv.id="modal";
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<ModalLoading/>}>
            {/* <Modal root={root} title="modal de prueba">
                Contenido de Modal
            </Modal> */}
            <Modal root={root} title="modal de configuraciones"/>
        </Suspense>
    );
}
export function openModalAccount(){
    const Modal = lazy(()=> import('./modalAccount'));//separa el codigo de Modal del bundle principal
    const modalDiv = document.createElement("div");
    modalDiv.id="modal";
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<ModalLoading/>}>
            {/* <Modal root={root} title="modal de prueba">
                Contenido de Modal
            </Modal> */}
            <Modal root={root} title="modal de configuraciones"/>
        </Suspense>
    );
}