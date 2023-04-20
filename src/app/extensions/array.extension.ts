declare global {
    interface Number {
        SeparadorMilhares(): String;
    }

    interface Array<T> {
        NuloOuNaoPossuiItens(): boolean;
        PossuiItemComIdZeroOuInvalido(): boolean;
    }
}

Number.prototype.SeparadorMilhares = function (): string {
    return Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

Array.prototype.NuloOuNaoPossuiItens = function () {
    return this === null || this === undefined || this.length === 0;
};

Array.prototype.PossuiItemComIdZeroOuInvalido = function () {
    return (this as any).some((x: { id: number | null | undefined; }) =>
        x.id === null || x.id === undefined || x.id === 0);
};


export { };   