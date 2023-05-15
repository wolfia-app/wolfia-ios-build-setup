import * as core from '@actions/core'

interface Inputs {
  appStoreConnectApiKey: string
  appStoreConnectApiIssuer: string
  appStoreConnectSecret: string
  certificate: string
  certificatePassword: string
  profileName: string
}

export const getInputs = (): Inputs => {
  return {
    appStoreConnectApiKey: core.getInput('app-store-connect-api-key-id', {
      required: true
    }),
    appStoreConnectApiIssuer: core.getInput('app-store-connect-api-issuer', {
      required: true
    }),
    appStoreConnectSecret: Buffer.from(
      core.getInput('app-store-connect-secret-base64', {
        required: true
      }),
      'base64'
    ).toString('ascii'),
    certificate: Buffer.from(
      core.getInput('certificate-base64', {required: true}),
      'base64'
    ).toString('binary'),
    certificatePassword: core.getInput('certificate-password', {
      required: true
    }),
    profileName: core.getInput('profile-name', {required: true})
  }
}
