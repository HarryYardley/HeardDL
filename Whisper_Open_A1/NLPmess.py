import spacy
from spacy import displacy
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from sklearn import metrics
from sklearn import model_selection
from sklearn.datasets import fetch_20newsgroups
from sklearn.dummy import DummyClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

#prints lemmatization of words

nlp = spacy.load('en_core_web_sm')

#prints Part-Of-Speech tags (course, then fine)
s_1 = "Harry watched an old movie at the cinema."
doc_2 = nlp(s_1)
print([(t.text, t.pos_, t.tag_) for t in doc_2])

s_2 = "Volkswagen is developing an electric sedan which could potentially come to America next fall."
doc_3 = nlp(s_2)
#checks is the token is an entity before printing it, prints token and entity type
print([(t.text, t.ent_type_) for t in doc_3 if t.ent_type != 0])

#the code below shows how words are related to each other
print([(t.text, t.dep_, t.head.text) for t in doc_3])

training_corpus = fetch_20newsgroups(subset='train')
train_data, val_data, train_labels, val_labels = train_test_split(training_corpus.data, training_corpus.target, train_size=0.8, random_state=1) 
print('Training data size: {}'.format(len(train_data)))
print('Validation data size: {}'.format(len(val_data)))

#This is a key step for pipelining the data when looking at comparing
#multiple sets of data, this removes punctuation, spaces, and filters
#for tokens consisteing of alphabetical characters only, returning
#just the token text

# Further remove stop words and take the lemma instead of token text.

def spacy_tokenizer(doc):
  return [t.text for t in nlp(doc) if \
          not t.is_punct and \
          not t.is_space and \
          t.is_alpha]

unwanted_pipes = ['ner', 'parser']

def spacy_tokenizer(doc):
  with nlp.disable_pipes(*unwanted_pipes):
    return [t.lemma_ for t in nlp(doc) if \
            not t.is_punct and \
            not t.is_space and \
            not t.is_stop and \
            t.is_alpha]
