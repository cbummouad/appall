import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const demoFormSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  numero: z.string().min(10, 'Le numéro doit contenir au moins 10 chiffres'),
  adresse: z.string().min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  pack: z.enum(['starter', 'team', 'enterprise'], 'Veuillez choisir un pack')
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPack?: 'starter' | 'team' | 'enterprise';
}

export const DemoForm: React.FC<DemoFormProps> = ({ isOpen, onClose, defaultPack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      pack: defaultPack
    }
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('demo-requests').insert([
        {
          ...data,
          createdat: new Date().toISOString(),
          status: 'pending'
        }
      ]);
      if (error) {
        throw error;
      }
      setIsSubmitted(true);
      reset({ pack: defaultPack });
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const packOptions = [
    { value: 'starter', label: 'Starter Pack', description: '5 utilisateurs, Ready Apps incluses' },
    { value: 'team', label: 'Team Pack', description: '25 utilisateurs, Apps illimitées' },
    { value: 'enterprise', label: 'Enterprise Pack', description: 'Illimité + on-premise' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="bg-white shadow-2xl">
              <CardHeader className="relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Demander une démo
                </CardTitle>
                <p className="text-gray-600">
                  Remplissez ce formulaire et notre équipe vous contactera rapidement
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous contacterons dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          {...register('nom')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Votre nom complet"
                        />
                        {errors.nom && (
                          <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Numéro de téléphone *
                        </label>
                        <input
                          {...register('numero')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Votre numéro de téléphone"
                        />
                        {errors.numero && (
                          <p className="text-red-500 text-sm mt-1">{errors.numero.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre.email@exemple.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de l'entreprise *
                      </label>
                      <input
                        {...register('adresse')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adresse complète de votre entreprise"
                      />
                      {errors.adresse && (
                        <p className="text-red-500 text-sm mt-1">{errors.adresse.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choix de pack *
                      </label>
                      <div className="space-y-3">
                        {packOptions.map((pack) => (
                          <label key={pack.value} className="flex items-start space-x-3 cursor-pointer">
                            <input
                              {...register('pack')}
                              type="radio"
                              value={pack.value}
                              className="mt-1 text-blue-500 focus:ring-blue-500"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{pack.label}</div>
                              <div className="text-sm text-gray-600">{pack.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.pack && (
                        <p className="text-red-500 text-sm mt-1">{errors.pack.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Décrivez vos besoins et attentes..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      ) : (
                        <>
                          <Send size={18} />
                          Envoyer la demande
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};