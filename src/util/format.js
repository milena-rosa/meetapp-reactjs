import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns-tz';

export const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();
export const pattern = "dd 'de' MMMM', às' H:mm";
export const locale = ptBR;

export const formatDate = stringDate => {
  return format(parseISO(stringDate), pattern, {
    locale: ptBR,
    timeZone,
  });
};
export const rawZonedDate = date =>
  format(parseISO(date), 'dd-MM-yyyy H:mm', {
    locale: ptBR,
    timeZone,
  });
