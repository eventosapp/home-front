import { prefijo } from "../constants/localstorage.constants";
import { clavesLocalStorage } from "../types/localstorage.types";

export function obtenerToken(): string | null {
    const clave: clavesLocalStorage = "token";
    const claveConPrefijo = `${prefijo}.${clave}`;
    return localStorage.getItem(claveConPrefijo);
}

export function guardarToken(token: string): void {
    const clave: clavesLocalStorage = "token";
    const claveConPrefijo = `${prefijo}.${clave}`;
    localStorage.setItem(claveConPrefijo, token);
}

export function eliminarToken(): void {
    const clave: clavesLocalStorage = "token";
    const claveConPrefijo = `${prefijo}.${clave}`;
    localStorage.removeItem(claveConPrefijo);
}