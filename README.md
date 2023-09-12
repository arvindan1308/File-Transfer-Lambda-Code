# File-Transfer-Lambda-Code

Create 2 aws account - eg aws1 as source and aws2 as destination.

In aws1 -  Add policy like "iam:CreateRole","iam:AttachRolePolicy","iam:PutRolePolicy",lambda:CreateFunction","lambda:InvokeFunction" and "iam:PassRole"
Create an iam role for lambda service and attach an policy.
Create a lambda function for moving file from aws account to another. 

In aws2 - Add policy like "s3:CreateBucket","s3:PutBucketPolicy" and "s3:ListAllMyBuckets"
Create a bucket and attach a bucket policy to it.


Architecture Diagram

![CALL](https://github.com/arvindan1308/File-Transfer-Lambda-Code/assets/52846982/7acd71ee-c98a-4e7e-a388-32a022746fc7)
