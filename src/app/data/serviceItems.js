// checklistItems.js
import { IoDocumentText } from 'react-icons/io5';
import { FaDatabase } from 'react-icons/fa6';
import { IoInformation } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { FaListCheck } from 'react-icons/fa6';

const visionItems = [
  {
    title: 'Online Formulare',
    desc: ' Nutzen Sie unsere individuell anpassbaren Online-Formulare, um spezifische Informationen für Ihr Reiseziel und Ihre Medikamente zu erhalten – einfach und direkt zu bearbeiten.',
    icon: IoDocumentText,
  },
  {
    title: 'Datenbank-Aktualisierung',
    desc: 'Unsere umfassende Medikamentendatenbank wird alle zwei Wochen aktualisiert, um Ihnen stets die neuesten Informationen zu gewährleisten.',
    icon: FaDatabase,
  },
  {
    title: 'Schnelle Auskunft',
    desc: ' Erhalten Sie umgehend detaillierte Informationen zu eventuellen Einschränkungen oder speziellen Bestimmungen im Zielland.',
    icon: IoInformation,
  },
  {
    title: 'Frühzeitige Problemerkennung',
    desc: ' Unser System identifiziert potenzielle Probleme im Voraus, sodass Sie gut vorbereitet und informiert Ihre Reise antreten können.',
    icon: FaClock,
  },
  {
    title: 'Internationale Partnerschaften',
    desc: '  Dank unserer engen Zusammenarbeit mit ausländischen Gesundheitsbehörden bieten wir Ihnen zuverlässige und offizielle Informationen.',
    icon: FaHandshakeSimple,
  },
  {
    title: 'Reise-Checklisten',
    desc: ' Unsere umfassenden Checklisten helfen Ihnen, alle notwendigen Vorbereitungen für die Mitnahme Ihrer Medikamente zu treffen, sodass Sie nichts übersehen.',
    icon: FaListCheck,
  },
];

export default visionItems;
