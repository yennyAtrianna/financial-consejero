// src/pages/LoginPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Logo / Icono */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-primary rounded-full p-4 mb-4">
            <span className="text-white text-2xl">🏦</span>
          </div>
          <h1 className="text-2xl font-semibold text-white">
            Financial Advisor
          </h1>
          <p className="text-gray-200">
            Tu asesor financiero personal
          </p>
        </div>

        {/* Formulario de login */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="usuario@empresa.com"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-primary text-white font-semibold 
                       hover:bg-accent transition"
          >
            Sign In
          </button>
        </form>

        {/* Olvidaste tu contraseña */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          ¿Olvidaste tu contraseña?
        </div>

        {/* Separador */}
        <div className="mt-4 flex items-center text-gray-400 text-sm">
          <hr className="flex-grow" />
          <span className="px-2">O SELECCIONA TU PERFIL</span>
          <hr className="flex-grow" />
        </div>

        {/* Botones de perfil */}
        <div className="mt-4 space-y-2">
          <Link
            to="/onboarding"
            className="block w-full py-2 border border-gray-300 rounded-lg 
                       text-center text-sm hover:bg-gray-100 transition"
          >
            Empleado sin conocimientos financieros
          </Link>
          <Link
            to="/onboarding"
            className="block w-full py-2 border border-gray-300 rounded-lg 
                       text-center text-sm hover:bg-gray-100 transition"
          >
            Empleado con conocimientos intermedios
          </Link>
        </div>
      </div>
    </div>
  )
}
