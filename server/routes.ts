import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API route to handle contact form submissions
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message || !service) {
        return res.status(400).json({ message: 'Please fill all required fields' });
      }
      
      // In a real application, you would save this to a database
      // and/or send an email notification
      
      console.log('Contact form submission:', { name, email, phone, service, message });
      
      // Return success response
      return res.status(200).json({ 
        message: 'Your message has been sent successfully. We will contact you soon!'
      });
    } catch (error) {
      console.error('Error handling contact form:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
