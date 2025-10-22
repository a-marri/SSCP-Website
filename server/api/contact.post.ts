export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Name, email, and message are required'
      })
    }

    // Send to Slack webhook
    const slackWebhookUrl = 'https://hooks.slack.com/triggers/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'
    
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        message: body.message
      })
    })

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: 'Failed to send message to Slack'
      })
    }

    return {
      success: true,
      message: 'Message sent successfully'
    }
  } catch (error: any) {
    console.error('Contact form error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to send message'
    })
  }
})

