export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const mpesaData = req.body;
      console.log('Received callback:', mpesaData);

      // TODO: Implement your callback logic here
      // For example:
      // await updatePaymentStatus(mpesaData);
      // await notifyClient(mpesaData);

      res.status(200).json({ ResultCode: 0, ResultDesc: "Callback processed successfully" });
    } catch (error) {
      console.error('Error processing callback:', error);
      res.status(500).json({ ResultCode: 1, ResultDesc: "Internal server error" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}