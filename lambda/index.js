/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a Calculadora UTHH';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput){
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd=handlerInput.requestEnvelope.request.intent.slots.dos.value;
        var numero1 = Number(cantidad)
        var numero2 = Number(cantidadd)
    if(isNaN(numero1) || isNaN(numero2)){
        return handlerInput.responseBuilder
        .speak('Lo siento, no pude entender los numeros. Porfavor, intentelo de nuevo.')
        .reprompt('¿Deseas realizar otra acción?')
        .getResponse();
    }
    let resultado = 0;
    resultado = numero1 + numero2;
    const speakOutput = `Calculadora UTHH... El resutado de la suma de ${numero1} mas ${numero2} es igual a ${resultado}.`;
    return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt('¿Deseas realizar otra acción?')
    .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput){
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd=handlerInput.requestEnvelope.request.intent.slots.dos.value;
        var numero1 = Number(cantidad)
        var numero2 = Number(cantidadd)
    if(isNaN(numero1) || isNaN(numero2)){
        return handlerInput.responseBuilder
        .speak('Lo siento, no pude entender los numeros. Porfavor, intentelo de nuevo.')
        .reprompt('¿Deseas realizar otra acción?')
        .getResponse();
    }
    let resultado = 0;
    resultado = numero1 - numero2;
    const speakOutput = `Calculadora UTHH... El resutado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;
    return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt('¿Deseas realizar otra acción?')
    .getResponse();
    }
};

const MultiplicaIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicaIntent';
    },
    handle(handlerInput){
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd=handlerInput.requestEnvelope.request.intent.slots.dos.value;
        var numero1 = Number(cantidad)
        var numero2 = Number(cantidadd)
    if(isNaN(numero1) || isNaN(numero2)){
        return handlerInput.responseBuilder
        .speak('Lo siento, no pude entender los numeros. Porfavor, intentelo de nuevo.')
        .reprompt('¿Deseas realizar otra acción?')
        .getResponse()
    }
    let resultado = 0;
    resultado = numero1 * numero2;
    const speakOutput = `Calculadora UTHH... El resutado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;
    return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt('¿Deseas realizar otra acción?')
    .getResponse();
    }
};

const DivideIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivideIntent';
    },
    handle(handlerInput){
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd=handlerInput.requestEnvelope.request.intent.slots.dos.value;
        var numero1 = Number(cantidad)
        var numero2 = Number(cantidadd)
    if(isNaN(numero1) || isNaN(numero2)){
        return handlerInput.responseBuilder
        .speak('Lo siento, no pude entender los numeros. Porfavor, intentelo de nuevo.')
        .reprompt('¿Deseas realizar otra acción?')
        .getResponse()
    }
    let resultado = 0;
    resultado = numero1 / numero2;
    const speakOutput = `Calculadora UTHH... El resutado de la division de ${numero1} entre ${numero2} es igual a ${resultado}.`;
    return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt('¿Deseas realizar otra acción?')
    .getResponse();
    }
};

const SenoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SenoIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
        let numero1 = Number(numero);

        if (isNaN(numero1)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, intentelo de nuevo.')
                .reprompt('¿Deseas realizar otra acción?')
                .getResponse();
        }

        let resultado = Math.sin(numero1 * Math.PI / 180);

        const speakOutput = `Calculadora UTHH... El resultado del seno de ${numero1}° grados es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas realizar otra acción?')
            .getResponse();
    }
};

const CosenoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CosenoIntent'; 
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
        let numero1 = Number(numero);

        if (isNaN(numero1)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, intentelo de nuevo.')
                .reprompt('¿Deseas realizar otra acción?')
                .getResponse();
        }

        let resultado = Math.cos(numero1 * Math.PI / 180);

        const speakOutput = `Calculadora UTHH... El resultado del coseno de ${numero1}° grados es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Deseas realizar otra acción?')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        MultiplicaIntentHandler,
        DivideIntentHandler,
        SenoIntentHandler,
        CosenoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();