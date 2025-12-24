---
layout: default
title: Material
---

<div class="material-container">
    <h1>Study Material & Notes</h1>
    <p class="page-description">Organized course notes and resources. Click on any folder to explore PDF notes and resources.</p>
    
    <div class="folders-grid">
        <!-- Core Subjects -->
        <div class="folder-card" onclick="toggleFolder('linear-algebra')">
            <div class="folder-header">
                <i class="fas fa-calculator"></i>
                <h3>Linear Algebra</h3>
            </div>
            <div class="folder-content" id="linear-algebra">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Vector Spaces.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Matrix Operations.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Eigenvalues & Vectors.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('machine-learning')">
            <div class="folder-header">
                <i class="fas fa-brain"></i>
                <h3>Machine Learning</h3>
            </div>
            <div class="folder-content" id="machine-learning">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Supervised Learning.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Unsupervised Learning.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Model Evaluation.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('deep-learning')">
            <div class="folder-header">
                <i class="fas fa-network-wired"></i>
                <h3>Deep Learning</h3>
            </div>
            <div class="folder-content" id="deep-learning">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Neural Networks.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> CNNs & RNNs.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Transformers.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('dsa')">
            <div class="folder-header">
                <i class="fas fa-sitemap"></i>
                <h3>Data Structures & Algorithms</h3>
            </div>
            <div class="folder-content" id="dsa">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Time Complexity.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Sorting Algorithms.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Graph Algorithms.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('dbms')">
            <div class="folder-header">
                <i class="fas fa-database"></i>
                <h3>Database Management Systems</h3>
            </div>
            <div class="folder-content" id="dbms">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> SQL Basics.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Normalization.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Transactions.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('cryptography')">
            <div class="folder-header">
                <i class="fas fa-lock"></i>
                <h3>Cryptography</h3>
            </div>
            <div class="folder-content" id="cryptography">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Encryption Basics.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Public Key Crypto.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Digital Signatures.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('climate')">
            <div class="folder-header">
                <i class="fas fa-leaf"></i>
                <h3>Climate Risk & Sustainable Finance</h3>
            </div>
            <div class="folder-content" id="climate">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Climate Models.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> ESG Metrics.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Risk Assessment.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('recommender')">
            <div class="folder-header">
                <i class="fas fa-star"></i>
                <h3>Recommender Systems</h3>
            </div>
            <div class="folder-content" id="recommender">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Collaborative Filtering.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Content-Based.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Hybrid Systems.pdf</a></li>
                </ul>
            </div>
        </div>
        
        <div class="folder-card" onclick="toggleFolder('consultancy')">
            <div class="folder-header">
                <i class="fas fa-briefcase"></i>
                <h3>Consultancy</h3>
            </div>
            <div class="folder-content" id="consultancy">
                <ul>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Case Studies.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Methodology.pdf</a></li>
                    <li><a href="#"><i class="far fa-file-pdf"></i> Best Practices.pdf</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- Projects Section -->
    <div class="projects-section">
        <h2><i class="fas fa-project-diagram"></i> Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <h3>Machine Learning Project 1</h3>
                <p>Classification model using various algorithms</p>
                <a href="https://github.com/yourusername/project1" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
            
            <div class="project-card">
                <h3>Data Analysis Project</h3>
                <p>Exploratory data analysis with visualization</p>
                <a href="https://github.com/yourusername/project2" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
            
            <div class="project-card">
                <h3>Deep Learning Model</h3>
                <p>Neural network implementation</p>
                <a href="https://github.com/yourusername/project3" target="_blank" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
    </div>
</div>
