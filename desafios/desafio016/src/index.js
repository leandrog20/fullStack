import 'core-js'
import 'regenerator-runtime/runtime'

import SentryObject from './sentry_objects'
import { getSentryObject } from './sentry_service'

async function loadSentryObjects(){
    let sentryObjects = []
    let sentryObjectsJSON = await getSentryObject()

    sentryObjectsJSON.forEach(sentry => {
        const newSentry = new SentryObject(sentry["sentryId"], sentry["fullname"], sentry["year_range_min"], sentry["year_range_max"])
        sentryObjects.push(newSentry)
    })

    renderSentryObject(sentryObjects)
}

function renderSentryObject(sentryObjects){
    const olElement = document.getElementById("sentry-objects")
    sentryObjects.forEach(sentry => {
        const liElement = document.createElement("li")

        const text = `(${sentry.id}) ${sentry.name}: risco de colisão entre: ${sentry.yearMin} e ${sentry.yearMax}`
        liElement.innerHTML = text
        olElement.appendChild(liElement)
    })
}

loadSentryObjects()