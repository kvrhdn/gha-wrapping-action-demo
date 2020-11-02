import * as core from '@actions/core'

async function run(): Promise<void> {
  core.info('Hello from main')

  // put isPost in the action state
  core.saveState('isPost', true)
}

async function post(): Promise<void> {
  core.info('Hello from post')

  const jobStatus = core.getInput('job-status', { required: true })
  core.info(`Job status is ${jobStatus}`)
}

// check if isPost is present in the action state
const isPost = !!core.getState('isPost')

if (!isPost) {
  run()
} else {
  post()
}
