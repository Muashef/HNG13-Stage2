// import { genId, saveTickets } from './Storage'

// export function seedTicketsForUserIfEmpty() {
//   const existing = localStorage.getItem('ticketapp_tickets')
//   if (existing) return

//   const sample = [
//     {
//       id: genId(),
//       title: 'Website feedback: homepage CTA',
//       description: 'Improve the CTA contrast and wording on the hero',
//       status: 'open',
//       priority: 'medium',
//       createdAt: Date.now() - 1000 * 60 * 60 * 24
//     },
//     {
//       id: genId(),
//       title: 'Authentication edge-case',
//       description: 'Session sometimes persists after logout in private mode',
//       status: 'in_progress',
//       priority: 'high',
//       createdAt: Date.now() - 1000 * 60 * 60 * 6
//     },
//     {
//       id: genId(),
//       title: 'Typo in footer',
//       description: 'Fix small typo in privacy link text',
//       status: 'closed',
//       priority: 'low',
//       createdAt: Date.now() - 1000 * 60 * 60 * 48
//     }
//   ]
//   saveTickets(sample)
// }