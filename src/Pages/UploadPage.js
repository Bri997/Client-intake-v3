<<<<<<< HEAD
// https://medium.com/@anjanava.biswas/uploading-files-to-aws-s3-from-react-app-using-aws-amplify-b286dbad2dd7
=======
// https://blog.cloudboost.io/how-to-upload-images-to-s3-bfac6b262d8d
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/global-config-object.html
// https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/s3/s3_photoExample.js
// https://levelup.gitconnected.com/upload-image-directly-from-react-app-to-amazon-s3-856280c62e45
// https://react-dropzone-uploader.js.org/docs/s3
// https://awesomeopensource.com/project/fortana-co/react-dropzone-uploader
// https://blog.webiny.com/upload-files-to-aws-s3-using-pre-signed-post-data-and-a-lambda-function-7a9fb06d56c1
// https://medium.com/@lakshmanLD/upload-file-to-s3-using-lambda-the-pre-signed-url-way-158f074cda6c


// ^^ use this

import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
// import ReactS3Uploader from 'react-s3-uploader'

// const AWS = require('aws-sdk')
// const bucketName = 'ql-client-upload'

// const bucketRegion = ''
// const IdentityPoolId = 'arn:aws:s3:::ql-client-upload'

// AWS.config.update({
//   region: bucketRegion,
//   credentials: new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: IdentityPoolId,
//   }),
// })

// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   params: { Bucket: bucketName },
// })

/**
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
**/

const UploadPage = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: 'https://httpbin.org/post' }
  }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file)
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta))
    allFiles.forEach((f) => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  )
}

export default UploadPage
>>>>>>> 9981a18acd59535d9363b7f45eb3384b9af80189
