
Notification Service (Node.js/NestJS/Microservice)
│
├── Uses Supabase DB + Realtime triggers for event generation
├── Push via FCM or OneSignal (for PWAs)
├── SMS/WhatsApp via Twilio / Msg 91
└── Optional: Email fallback via Msg91


🧱 Notification Service Architecture

			[ Stakeholder UI (PWA/Web App) ]   [ Admin UI / ERP UI ]
                                       |
                                       v
                                  [ Web Client ]          [Web Client]

														
				[Mobile BFF]      [Web BFF NextJS / fastify Gateway]	


			+--------------------------------------------------+
			|                                                    --> [Dispath Micro Service]
   			  Sangam ERP Core System  (Workflow Orchestrator) 	| --> [Inventroy MicroService] 
			|                                                    --> [Procurement MicroService ]   
			+--------------------------------------------------+
        					 |
        					 v                                                              DB Layer
			+-----------------------------------------------------------+     +----------------------------------------------------------------+
			| Notification Queue (Postrgess DB, BullMQ-Redis, RabbitMQ) |     | PostgressSqL + NQ Table / Triggers or polling jobs |
			+-----------------------------------------------------------+     +----------------------------------------------------+
         					 |
        					 v                                                                    
					+----------------------------+
					| Notification MicroService  | <-- Wrapper Layer
					+----------------------------+
					| - sendPush()               |
					| - sendSMS()                |
					| - sendWhatsApp()           |
					| - sendEmail()              |
 					----------------------------
         						 |
        						 v
					+----------------------------+
					| Notification Providers     |
					+----------------------------+
					| - FCMProvider (default)    |
					| - OneSignalProvider (future) -> 
					| - TwilioSMSProvider        |
   					| - WhatsAppProvider         |
   					+----------------------------+
