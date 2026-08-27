export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Solução', href: '#solucao' },
  { label: 'Público-Alvo', href: '#publico' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Nossa Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export const cameraModes = {
  aula: {
    label: 'Aula',
    time: '08:12',
    hint: 'Quadro detectado',
    description: 'Documentos, quadros e apresentações ficam no centro da experiência.',
    tone: '#7de8ff',
    exposure: '+0.3',
  },
  campus: {
    label: 'Campus',
    time: '12:46',
    hint: 'Pessoas em movimento',
    description: 'O acesso rápido acompanha encontros e registros espontâneos.',
    tone: '#5b8cff',
    exposure: '0.0',
  },
  treino: {
    label: 'Treino',
    time: '18:20',
    hint: 'Movimento em cena',
    description: 'Uma interface direta ajuda a registrar ação sem quebrar o ritmo.',
    tone: '#ff3da4',
    exposure: '-0.3',
  },
  noite: {
    label: 'Noite',
    time: '22:01',
    hint: 'Pouca luz',
    description: 'Controles essenciais ganham clareza em ambientes com menos luz.',
    tone: '#9c7bff',
    exposure: '+0.7',
  },
}

export const moments = [
  { id: 'aula', index: '01', title: 'Aula', time: '08:12', copy: 'Uma anotação no quadro. Antes que a aula mude de assunto.' },
  { id: 'campus', index: '02', title: 'Campus', time: '12:46', copy: 'Um encontro entre uma matéria e outra. Sem pedir para repetir.' },
  { id: 'treino', index: '03', title: 'Treino', time: '18:20', copy: 'O movimento acontece. A interface sai do caminho.' },
  { id: 'noite', index: '04', title: 'Casa', time: '22:01', copy: 'O dia desacelera. A memória continua nítida.' },
]

export const team = [
  { name: 'Eduardo Bechara Medeiros Craveiro', rm: 'RM 571081', initials: 'EB' },
  { name: 'Bruno Carreiro Dos Santos', rm: 'RM 569423', initials: 'BC' },
  { name: 'Gustavo Moita de Lima', rm: 'RM 569180', initials: 'GM' },
]
