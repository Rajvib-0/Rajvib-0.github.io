---
layout: default
title: Contact
---

<div class="contact-container">
    <h1>Get in Touch</h1>
    <p class="contact-description">Feel free to reach out for questions, or discussions about data science!</p>
    
    <div class="contact-grid">
        <div class="contact-info">
            <h2><i class="fas fa-info-circle"></i> Contact Information</h2>
            
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h3>Email</h3>
                    <p>student.email@dau.ac.in</p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <div>
                    <h3>LinkedIn</h3>
                    <p><a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fab fa-github"></i>
                <div>
                    <h3>GitHub</h3>
                    <p><a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fas fa-university"></i>
                <div>
                    <h3>University</h3>
                    <p>DAU Gandhinagar<br>MSc Data Science (2025-27)</p>
                </div>
            </div>
        </div>
        
        <div class="contact-form">
            <h2><i class="fas fa-paper-plane"></i> Send a Message</h2>
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Send Message
                </button>
            </form>
            
            <div class="form-note">
                <p><i class="fas fa-info-circle"></i> Note: This form uses Formspree for email delivery. You'll need to set up a free account at <a href="https://formspree.io" target="_blank">formspree.io</a> and update the form action.</p>
            </div>
        </div>
    </div>
    
    <div class="faq-section">
        <h2><i class="fas fa-question-circle"></i> Frequently Asked Questions</h2>
        
        <div class="faq-item">
            <h3>Can I use your notes for my studies?</h3>
            <p>Absolutely! All notes are shared to help fellow students. Please attribute if you use them extensively.</p>
        </div>
        
        <div class="faq-item">
            <h3>How often are notes updated?</h3>
            <p>Notes are updated as I progress through my courses, typically weekly during semesters.</p>
        </div>
        
        <div class="faq-item">
            <h3>Do you accept contributions?</h3>
            <p>Yes! If you find errors or want to add improvements, please create a pull request on GitHub.</p>
        </div>
    </div>
</div>
